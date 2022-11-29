using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Building : MonoBehaviour
{
    public string buildingName;
    public double buildingCost;
    public double buildingDefaultCPS;

    private int buildingAmount;
    private double buildingCPS;

    [SerializeField]
    private TextMeshProUGUI buildingTextName;

    [SerializeField]
    private TextMeshProUGUI buildingTextCost;

    [SerializeField]
    private TextMeshProUGUI buildingTextAmount;

    public void Awake()
    {
        buildingTextName.text = buildingName;
        buildingTextCost.text = "" + buildingCost;
    }

    public void BuildingBuy()
    {
        print("BUYING " + buildingName);
    }
}
