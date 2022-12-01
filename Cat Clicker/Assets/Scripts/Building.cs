using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Building : MonoBehaviour
{
    public string buildingName;
    public double buildingCost;
    public double buildingDefaultCPS;

    public int buildingAmount;
    private double buildingCPS;

    [SerializeField]
    private TextMeshProUGUI buildingTextName;

    [SerializeField]
    private TextMeshProUGUI buildingTextCost;

    [SerializeField]
    private TextMeshProUGUI buildingTextAmount;

    public void Awake()
    {
        //ADD TEXT TO GAMEOBJECT
        buildingTextName.text = buildingName;
        UpdateText();
    }

    public void Start()
    {
        //ADD GAMEOBJECT TO BUILDING LIST IN MAIN SCRIPT
        Main.buildingsList.Add(this.gameObject);
    }

    public void BuildingBuy()
    {
        if (CatCookie.catsCount >= buildingCost)
        {
            CatCookie.catsCount -= buildingCost;
            buildingAmount++;

            UpdateCost();
            UpdateText();
            Main.UpdateCPS();
        }
    }

    private void UpdateText()
    {
        if (buildingAmount != 0)
        {
            buildingTextAmount.enabled = true;
        }

        buildingTextCost.text = "" + System.Math.Round(buildingCost, 2);
        buildingTextAmount.text = "" + buildingAmount;
    }

    private void UpdateCost()
    {
        buildingCost *= Main.buildingCostIncrease;
    }
}
