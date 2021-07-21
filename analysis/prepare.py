import pandas as pd
from pandas.core.indexes.base import Index
import glob


def merge_files(in_path, out_path):
    files = glob.glob(in_path)
    total_df = pd.DataFrame()
    for idx, file in enumerate(files):
        with open(file) as file:
            file_name = files[idx]
            framework = file_name.split("/")[4].split("_")[0]
            library = file_name.split("/")[4].split("_")[1].split(".")[0]
            df = pd.read_csv(file, header=0, encoding='utf-8', index_col=1)
            del df['#']
            del df['Output']
            total_df[framework + "/" + library] = df['ErrorCount']
    total_df.to_csv(out_path, sep=',', encoding='utf-8')


def merge_arc_files():
    merge_files("../testing/arc/byLibrary/*", "../testing/arc/errors.csv")


def merge_axe_files():
    merge_files("../testing/axe/byLibrary/*", "../testing/axe/errors.csv")


merge_arc_files()
merge_axe_files()
