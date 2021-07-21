import pandas as pd
from pandas.core.indexes.base import Index

precision_2 = '{:,.2f}'


def write_csv(x, path):
    x.to_csv(path, sep=',', encoding='utf-8')


def write_csv_no_header(x, path):
    x.to_csv(path, sep=',', encoding='utf-8', header=False)


def map_success_ratio(category):
    def closure(x):
        if not isinstance(x, str):
            return x
        split = x.split("/")
        indexes = [0, 1] if category == 'keyboard' else [2, 3]
        checks = int(split[indexes[0]])
        passed = int(split[indexes[1]])
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


def manual():
    df = pd.read_csv(
        "../testing/manual/errors.csv",
        header=0,
        encoding='utf-8',
        index_col=0,
    )

    # cleanup
    df.index.names = ['Widget']

    # total checks done
    total_keyboard_checks = df.applymap(map_to_int(0)).sum().sum()
    total_aria_checks = df.applymap(map_to_int(2)).sum().sum()

    # total widgets expected to be tested
    total_widgets_expected = len(df.columns) * len(df.index)  # test 14 * 26

    # total widgets tested
    total_widgets_tested = df.count().sum()

    # ratio of keyboard successfull checks by lib
    keyboard_success = df.applymap(map_success_ratio("keyboard"))
    write_csv(keyboard_success, "./out/manual/KeyboardSuccessRatio.csv")

    # ratio of ARIA successfull checks
    aria_success = df.applymap(map_success_ratio("aria"))
    write_csv(aria_success, "./out/manual/AriaSuccessRatio.csv")

    # errors found lib/widget
    keyboard_errors = df.applymap(map_error_count("keyboard"))
    write_csv(keyboard_errors, "./out/manual/ErrorsKeyboard.csv")
    aria_errors = df.applymap(map_error_count("aria"))
    write_csv(aria_errors, "./out/manual/ErrorsAria.csv")

    # mean widget errors by lib
    mean_keyboard_errors = keyboard_errors.mean(axis=0).map(precision_2.format)
    write_csv_no_header(mean_keyboard_errors,
                        "./out/manual/MeanWidgetErrorsKeyboardByLib.csv")
    mean_aria_errors = aria_errors.mean(axis=0).map(precision_2.format)
    write_csv_no_header(
        mean_aria_errors, "./out/manual/MeanWidgetErrorsAriaByLib.csv")

    # errors found by lib
    keyboard_errors_by_lib = keyboard_errors.sum()
    write_csv_no_header(keyboard_errors_by_lib,
                        "./out/manual/ByLibErrorsKeyboard.csv")
    aria_errors_by_lib = aria_errors.sum()
    write_csv_no_header(aria_errors_by_lib, "./out/manual/ByLibErrorsAria.csv")

    # mean keyboard success by library
    keyboard_success_mean = keyboard_success.mean(
        axis=0).map(precision_2.format)
    write_csv_no_header(keyboard_success_mean,
                        "./out/manual/KeyboardSuccessRatioMeanByLib.csv")

    # mean ARIA success by library
    aria_success_mean = aria_success.mean(axis=0).map(precision_2.format)
    write_csv_no_header(aria_success_mean,
                        "./out/manual/AriaSuccessRatioMeanByLib.csv")

    # mean keyboard success across all libs
    mean_keyboard_success_all = keyboard_success_mean.to_frame().T.applymap(
        lambda x: float(x)).mean(axis=1).map(precision_2.format)[0]

    # mean ARIA success across all libs
    mean_aria_success_all = aria_success_mean.to_frame().T.applymap(
        lambda x: float(x)).mean(axis=1).map(precision_2.format)[0]

    # mean ration of keyboard successfull checks by widget
    mean_keyboard_success_by_widget = df.T.applymap(
        map_success_ratio("keyboard")).mean(axis=0).map(precision_2.format)
    write_csv_no_header(mean_keyboard_success_by_widget,
                        "./out/manual/MeanKeyboardSuccessRatioByWidget.csv")

    # mean ration of ARIA successfull checks by widget
    mean_aria_success_by_widget = df.T.applymap(
        map_success_ratio("aria")).mean(axis=0).map(precision_2.format)
    write_csv_no_header(mean_aria_success_by_widget,
                        "./out/manual/MeanAriaSuccessRatioByWidget.csv")

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
                   mean_keyboard_success_all + "\n")
        file.write("total mean widget aria success rate:     " +
                   mean_aria_success_all + "\n")


def automated():
    arc_df = pd.read_csv("../testing/arc/errors.csv",
                         encoding='utf-8', index_col=0)
    axe_df = pd.read_csv("../testing/axe/errors.csv",
                         encoding='utf-8', index_col=0)
    # arc
    arc_total_errors_by_lib = arc_df.sum()
    arc_total_errors = arc_total_errors_by_lib.sum()
    arc_mean_error_by_widget = arc_df.mean(axis=1).map(precision_2.format)

    # axe
    axe_total_errors_by_lib = axe_df.sum()
    axe_total_errors = axe_total_errors_by_lib.sum()
    axe_mean_error_by_widget = axe_df.mean(axis=1).map(precision_2.format)

    # total automated
    automated_df = arc_df.add(axe_df, fill_value=0).applymap(
        lambda x: x / 2)  # arc + axe / 2
    automated_errors_by_lib = automated_df.sum()
    automated_mean_error_by_widget = automated_df.mean(
        axis=1).map(precision_2.format)

    # total aut detected errors by libraries and average
    out_totals_by_libs = pd.concat(
        [axe_total_errors_by_lib, arc_total_errors_by_lib, automated_errors_by_lib], axis=1, ignore_index=True)
    out_totals_by_libs = out_totals_by_libs.rename(
        columns={0: 'AXE', 1: 'ARC', 2: 'Average'})
    write_csv(out_totals_by_libs, "./out/auto/TotalErrorsByLibrary.csv")

    # total aut mean errors by widget
    out_totals_by_widget = pd.concat(
        [axe_mean_error_by_widget, arc_mean_error_by_widget, automated_mean_error_by_widget], axis=1, ignore_index=True)
    out_totals_by_widget = out_totals_by_widget.rename(
        columns={0: 'AXE', 1: 'ARC', 2: 'Average'})
    write_csv(out_totals_by_widget, "./out/auto/TotalMeanErrorsByWidget.csv")

    # totals
    with open('./out/auto/Totals.txt', 'w') as file:
        file.write("ARC total errors detected:               " +
                   str(int(arc_total_errors)) + "\n")
        file.write("AXE total errors detected:               " +
                   str(int(axe_total_errors)) + "\n")


manual()
automated()
