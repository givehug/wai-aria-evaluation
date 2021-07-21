import pandas as pd
from pandas.core.indexes.base import Index

precision_2 = '{:,.2f}'


def manual():
    df = pd.read_csv(
        "../testing/manual/output/checklistResults.csv",
        header=0,
        encoding='utf-8',
        index_col=0,
    )

    # cleanup
    df.index.names = ['Widget']

    # total checks done
    total_keyboard_checks = df.applymap(to_int(0)).sum().sum()
    total_aria_checks = df.applymap(to_int(2)).sum().sum()

    # total widgets expected to be tested
    total_widgets_expected = len(df.columns) * len(df.index)  # test 14 * 26

    # total widgets tested
    total_widgets_tested = df.count().sum()

    # ratio of keyboard successfull checks by lib
    keyboard_success = df.applymap(success_ratio("keyboard"))
    keyboard_success.to_csv(
        "./out/manual/KeyboardSuccessRatio.csv",
        sep='\t',
        encoding='utf-8',
    )

    # ratio of ARIA successfull checks
    aria_success = df.applymap(success_ratio("aria"))
    aria_success.to_csv(
        "./out/manual/AriaSuccessRatio.csv",
        sep='\t',
        encoding='utf-8',
    )

    # mean keyboard success by library
    keyboard_success_mean = keyboard_success.mean(
        axis=0).map(precision_2.format)
    keyboard_success_mean.to_csv(
        "./out/manual/KeyboardSuccessRatioMeanByLib.csv", sep='\t', encoding='utf-8', header=False)

    # mean ARIA success by library
    aria_success_mean = aria_success.mean(axis=0).map(precision_2.format)
    aria_success_mean.to_csv(
        "./out/manual/AriaSuccessRatioMeanByLib.csv", sep='\t', encoding='utf-8', header=False)

    # mean keyboard success across all libs
    mean_keyboard_success_all = keyboard_success_mean.to_frame().T.applymap(
        lambda x: float(x)).mean(axis=1).map(precision_2.format)[0]

    # mean ARIA success across all libs
    mean_aria_success_all = aria_success_mean.to_frame().T.applymap(
        lambda x: float(x)).mean(axis=1).map(precision_2.format)[0]

    # mean ration of keyboard successfull checks by widget
    mean_keyboard_success_by_widget = df.T.applymap(
        success_ratio("keyboard")).mean(axis=0).map(precision_2.format)
    mean_keyboard_success_by_widget.to_csv(
        "./out/manual/MeanKeyboardSuccessRatioByWidget.csv",
        sep='\t',
        encoding='utf-8',
        header=False
    )

    # mean ration of ARIA successfull checks by widget
    mean_aria_success_by_widget = df.T.applymap(
        success_ratio("aria")).mean(axis=0).map(precision_2.format)
    mean_aria_success_by_widget.to_csv(
        "./out/manual/MeanAriaSuccessRatioByWidget.csv",
        sep='\t',
        encoding='utf-8',
        header=False
    )

    # keyboard_success_mean.to_frame().T.to_csv(
    #     "./out.csv", sep='\t', encoding='utf-8', index=False)

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


def success_ratio(category):
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


def to_int(index):
    def closure(x):
        if not isinstance(x, str):
            return x
        split = x.split("/")
        return int(split[index])
    return closure


manual()
