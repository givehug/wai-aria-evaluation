import pandas as pd
from pandas.core.indexes.base import Index
import glob


def merge_arc_files():
    # TODO: delete this redundant dir
    arc_files = glob.glob("../testing/arc/byLibrary/*")
    total_df = pd.DataFrame()
    for idx, file in enumerate(arc_files):
        with open(file) as file:
            file_name = arc_files[idx]
            framework = file_name.split("/")[4].split("_")[0]
            library = file_name.split("/")[4].split("_")[1].split(".")[0]
            df = pd.read_csv(file, header=0, encoding='utf-8', index_col=1)
            del df['#']
            del df['Test output']
            total_df[framework + "/" + library] = df['ErrorCount']
    total_df.to_csv("../testing/arc/errors.csv", sep='\t', encoding='utf-8')


def merge_axe_files():
    # TODO: delete this redundant dir
    arc_files = glob.glob("../testing/axe/byLibrary/*")
    total_df = pd.DataFrame()
    for idx, file in enumerate(arc_files):
        with open(file) as file:
            file_name = arc_files[idx]
            framework = file_name.split("/")[4].split("_")[0]
            library = file_name.split("/")[4].split("_")[1].split(".")[0]
            df = pd.read_csv(file, header=0, encoding='utf-8', index_col=1)
            del df['#']
            del df['Description']
            total_df[framework + "/" + library] = df['Errors']
    total_df.to_csv("../testing/axe/errors.csv", sep='\t', encoding='utf-8')


merge_arc_files()
merge_axe_files()
