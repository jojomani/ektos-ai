import numpy as np
from scipy.stats import chi2_contingency

def identify_biases(data, protected_attributes, alpha=0.05):
    biases = {}

    for attr in protected_attributes:
        contingency_table = pd.crosstab(data[attr], data["employee_retention"])
        stat, p, dof, expected = chi2_contingency(contingency_table)

        if p < alpha:
            biases[attr] = {
                "p_value": p,
                "contingency_table": contingency_table.to_dict(),
            }

    return biases