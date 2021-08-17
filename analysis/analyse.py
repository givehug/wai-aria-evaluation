import pandas as pd
from pandas.core.indexes.base import Index


def write_csv(x, path):
    x.to_csv(path, sep=',', encoding='utf-8')


def write_csv_no_header(x, path):
    x.to_csv(path, sep=',', encoding='utf-8', header=False)


def map_success_ratio(category):
    def closure(x):
        if not isinstance(x, str):
            return x
        split = x.split("/")

        keyboard_indexes = [0, 1]
        aria_indexes = [2, 3]
        checks = 0
        passed = 0
        keyboard_checks = int(split[keyboard_indexes[0]])
        keyboard_passed = int(split[keyboard_indexes[1]])
        aria_checks = int(split[aria_indexes[0]])
        aria_passed = int(split[aria_indexes[1]])

        if category == "keyboard":
            checks = keyboard_checks
            passed = keyboard_passed
        if category == "aria":
            checks = aria_checks
            passed = aria_passed
        if category == "total":
            checks = aria_checks + keyboard_checks
            passed = aria_passed + keyboard_passed

        if checks == 0:
            return 1
        if passed == 0:
            return 0
        return round(passed / checks, 2)
    return closure


def map_error_count(category):
    def closure(x):
        if not isinstance(x, str):
            return x
        split = x.split("/")
        indexes = [0, 1] if category == 'keyboard' else [2, 3]
        checks = int(split[indexes[0]])
        passed = int(split[indexes[1]])
        return checks - passed
    return closure


def map_to_int(index):
    def closure(x):
        if not isinstance(x, str):
            return x
        split = x.split("/")
        return int(split[index])
    return closure


def map_round_2(x):
    return round(x, 2)


def manual():
    def concat_keyboard_aria(df_aria, df_key):
        x = pd.concat([df_aria, df_key], axis=1, ignore_index=True)
        mean = x.mean(axis=1).map(map_round_2)
        sum = x.sum(axis=1).map(map_round_2)
        x = pd.concat([x, mean, sum], axis=1, ignore_index=True)
        x = x.rename(
            columns={0: 'Keyboard', 1: 'ARIA', 2: 'Average', 3: 'Sum'})
        return x

    df = pd.read_csv(
        "./in/manualErrors.csv",
        header=0,
        encoding='utf-8',
        index_col=0,
    )

    # cleanup
    df.index.names = ['Widget']

    # totals
    total_keyboard_checks = df.applymap(map_to_int(0)).sum().sum()
    total_aria_checks = df.applymap(map_to_int(2)).sum().sum()
    total_widgets_expected = len(df.columns) * len(df.index)  # test 14 * 26
    total_widgets_tested = df.count().sum()

    # ratio of successfull checks by lib
    keyboard_success = df.applymap(map_success_ratio("keyboard"))
    write_csv(keyboard_success, "./out/manual/SuccessRatioKeyboard.csv")
    aria_success = df.applymap(map_success_ratio("aria"))
    write_csv(aria_success, "./out/manual/SuccessRatioAria.csv")
    average_success = df.applymap(map_success_ratio("total"))
    write_csv(average_success, "./out/manual/SuccessRatio.csv")

    # errors found lib/widget
    keyboard_errors = df.applymap(map_error_count("keyboard"))
    write_csv(keyboard_errors, "./out/manual/ErrorsKeyboard.csv")
    aria_errors = df.applymap(map_error_count("aria"))
    write_csv(aria_errors, "./out/manual/ErrorsAria.csv")

    # mean errors per widget
    mean_widget_keyboard_errors = keyboard_errors.mean(axis=1).map(map_round_2)
    mean_widget_aria_errors = aria_errors.mean(axis=1).map(map_round_2)
    mean_widget_errors = concat_keyboard_aria(
        mean_widget_keyboard_errors,
        mean_widget_aria_errors,
    )
    write_csv(
        mean_widget_errors, "./out/manual/MeanErrorsByWidget.csv")

    # number of implemented widgets by lib
    widget_count_by_lib = aria_errors.count()
    write_csv_no_header(widget_count_by_lib,
                        "./out/manual/WidgetCountByLib.csv")

    # mean widget errors by lib
    mean_keyboard_errors = keyboard_errors.mean(axis=0).map(map_round_2)
    mean_aria_errors = aria_errors.mean(axis=0).map(map_round_2)
    mean_widget_errors_by_lib = concat_keyboard_aria(
        mean_keyboard_errors,
        mean_aria_errors
    )
    write_csv(
        mean_widget_errors_by_lib, "./out/manual/MeanWidgetErrorsByLibrary.csv")

    # errors found by lib
    keyboard_errors_by_lib = keyboard_errors.sum()
    aria_errors_by_lib = aria_errors.sum()
    totals_errors_by_libs = concat_keyboard_aria(
        keyboard_errors_by_lib,
        aria_errors_by_lib,
    )
    write_csv(totals_errors_by_libs,
              "./out/manual/TotalErrorsByLibrary.csv")

    # mean success ratio by library
    keyboard_success_mean = keyboard_success.mean(
        axis=0).map(map_round_2)
    aria_success_mean = aria_success.mean(axis=0).map(map_round_2)
    total_success_mean = concat_keyboard_aria(
        keyboard_success_mean,
        aria_success_mean
    )
    write_csv(total_success_mean,
              "./out/manual/MeanSuccessRatioByLibrary.csv")

    react_success_rate = total_success_mean.iloc[0:6]
    mean_react_success_rate = react_success_rate.mean().map(map_round_2)

    vue_success_rate = total_success_mean.iloc[6:10]
    mean_vue_success_rate = vue_success_rate.mean().map(map_round_2)

    angular_success_rate = total_success_mean.iloc[10:12]
    mean_angular_success_rate = angular_success_rate.mean().map(map_round_2)

    svelte_success_rate = total_success_mean.iloc[12:14]
    mean_svelte_success_rate = svelte_success_rate.mean().map(map_round_2)

    framework_success_rate = pd.concat([
        mean_react_success_rate,
        mean_vue_success_rate,
        mean_angular_success_rate,
        mean_svelte_success_rate,
    ], axis=1, ignore_index=True)
    framework_success_rate = framework_success_rate.rename(
        columns={0: 'React', 1: 'Vue', 2: 'Angular', 3: 'Svelte'})
    write_csv(framework_success_rate, "./out/manual/FrameworkSuccessRate.csv")

    # mean widget success ratio
    mean_keyboard_success_by_widget = df.T.applymap(
        map_success_ratio("keyboard")).mean(axis=0).map(map_round_2)
    mean_aria_success_by_widget = df.T.applymap(
        map_success_ratio("aria")).mean(axis=0).map(map_round_2)
    total_success_by_widget = concat_keyboard_aria(
        mean_keyboard_success_by_widget,
        mean_aria_success_by_widget
    )
    write_csv(total_success_by_widget,
              "./out/manual/MeanSuccessRatioByWidget.csv")

    # mean success across all libs
    mean_keyboard_success_all = keyboard_success_mean.to_frame().T.applymap(
        lambda x: float(x)).mean(axis=1).map(map_round_2)[0]
    mean_aria_success_all = aria_success_mean.to_frame().T.applymap(
        lambda x: float(x)).mean(axis=1).map(map_round_2)[0]
    # mean errors count across all libs
    mean_keyboard_errors_all = mean_keyboard_errors.to_frame().T.applymap(
        lambda x: float(x)).mean(axis=1).map(map_round_2)[0]
    mean_aria_errors_all = mean_aria_errors.to_frame().T.applymap(
        lambda x: float(x)).mean(axis=1).map(map_round_2)[0]

    with open('./out/manual/Totals.txt', 'w') as file:
        file.write("total widgets expected to be tested:     " +
                   str(int(total_widgets_expected)) + "\n")
        file.write("total widgets tested:                    " +
                   str(int(total_widgets_tested)) + "\n")
        file.write("total manual checks performed:           " +
                   str(int(total_keyboard_checks + total_aria_checks)) + "\n")
        file.write("    - keyboard checks:                   " +
                   str(int(total_keyboard_checks)) + "\n")
        file.write("    - aria checks:                       " +
                   str(int(total_aria_checks)) + "\n")
        file.write("total mean widget keyboard success rate: " +
                   str(mean_keyboard_success_all) + "\n")
        file.write("total mean widget aria success rate:     " +
                   str(mean_aria_success_all) + "\n")
        file.write("total mean widget keyboard error count:  " +
                   str(mean_keyboard_errors_all) + "\n")
        file.write("total mean widget aria error count:      " +
                   str(mean_aria_errors_all) + "\n")


def automated():
    arc_df = pd.read_csv("./in/arcErrors.csv",
                         encoding='utf-8', index_col=0)
    axe_df = pd.read_csv("./in/axeErrors.csv",
                         encoding='utf-8', index_col=0)
    # arc
    arc_total_errors_by_lib = arc_df.sum()
    arc_total_errors = arc_total_errors_by_lib.sum()
    arc_mean_error_by_widget = arc_df.mean(axis=1).map(map_round_2)
    write_csv(arc_df, "./out/auto/AutoArcErrors.csv")

    # axe
    axe_total_errors_by_lib = axe_df.sum()
    axe_total_errors = axe_total_errors_by_lib.sum()
    axe_mean_error_by_widget = axe_df.mean(axis=1).map(map_round_2)
    write_csv(axe_df, "./out/auto/AutoAxeErrors.csv")

    # total
    automated_df = arc_df.add(axe_df, fill_value=0).applymap(
        lambda x: x / 2)  # arc + axe / 2
    automated_errors_by_lib = automated_df.sum()
    automated_mean_error_by_widget = automated_df.mean(
        axis=1).map(map_round_2)

    # total detected errors by libraries and average
    out_totals_by_libs = pd.concat(
        [axe_total_errors_by_lib, arc_total_errors_by_lib, automated_errors_by_lib], axis=1, ignore_index=True)
    out_totals_by_libs = out_totals_by_libs.rename(
        columns={0: 'AXE', 1: 'ARC', 2: 'Average'})
    write_csv(out_totals_by_libs, "./out/auto/AutoTotalErrorsByLibrary.csv")

    # total mean errors by widget
    out_totals_by_widget = pd.concat(
        [axe_mean_error_by_widget, arc_mean_error_by_widget, automated_mean_error_by_widget], axis=1, ignore_index=True)
    out_totals_by_widget = out_totals_by_widget.rename(
        columns={0: 'AXE', 1: 'ARC', 2: 'Average'})
    write_csv(out_totals_by_widget, "./out/auto/AutoMeanErrorsByWidget.csv")

    # mean error count
    average_errors_by_lib = out_totals_by_libs.mean(axis=0)
    average_errors_by_widget = out_totals_by_widget.mean(axis=0)

    # totals
    with open('./out/auto/AutoTotals.txt', 'w') as file:
        file.write("ARC total errors detected:               " +
                   str(int(arc_total_errors)) + "\n")
        file.write("AXE total errors detected:               " +
                   str(int(axe_total_errors)) + "\n")
        file.write("mean errors per library:                 \n" +
                   average_errors_by_lib.to_string() + "\n")
        file.write("mean errors per widget:                  \n" +
                   average_errors_by_widget.to_string() + "\n")


manual()
automated()
