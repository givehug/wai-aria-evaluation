import pandas as pd
from pandas.core.indexes.base import Index
import glob
from shutil import copyfile
import pathlib

# create input and output dirs if not exist for safety
pathlib.Path('./in').mkdir(parents=True, exist_ok=True)
pathlib.Path('./out/auto').mkdir(parents=True, exist_ok=True)
pathlib.Path('./out/manual').mkdir(parents=True, exist_ok=True)


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
    merge_files("../testing/arc/byLibrary/*", "./in/arcErrors.csv")


def merge_axe_files():
    merge_files("../testing/axe/byLibrary/*", "./in/axeErrors.csv")


merge_arc_files()
merge_axe_files()
copyfile("../testing/manual/errors.csv", "./in/manualErrors.csv")
