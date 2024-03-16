def verify_decisions(data, biases, threshold=0.8):
    verified_decisions = []

    for _, row in data.iterrows():
        decision = row["employee_retention"]
        bias_score = 0

        for attr, bias in biases.items():
            if row[attr] in bias["contingency_table"]:
                bias_score += bias["p_value"]

        if bias_score < threshold:
            verified_decisions.append(decision)
        else:
            verified_decisions.append(0)  # Set decision to 0 if bias score exceeds threshold

    return verified_decisions