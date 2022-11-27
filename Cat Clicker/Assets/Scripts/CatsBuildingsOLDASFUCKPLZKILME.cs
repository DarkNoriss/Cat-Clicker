using UnityEngine;
using TMPro;

public class CatsBuildings : MonoBehaviour
{
    public string buildingName { get; set; }
    public float buildingCost { get; set; }
    public float buildingDefaultCPS { get; set; }

    [SerializeField]
    private TextMeshProUGUI buildingTextName;

    [SerializeField]
    private TextMeshProUGUI buildingTextCost;

    [SerializeField]
    private TextMeshProUGUI buildingTextAmount;

    private int buildingAmount;
    public float buildingCPS { get; set; }

    public void Start()
    {
        buildingTextName.text = buildingName;
        UpdateCost();
    }

    public void BuildingBuy()
    {
        //if (CatsGlobal.catsCount >= buildingCost)
        //{
        //    CatsGlobal.catsCount -= buildingCost;
        //    buildingAmount += 1;
        //    buildingTextAmount.text = buildingAmount.ToString();
        //
        //    UpdateCPS();
        //}

        if (buildingTextAmount.enabled == false)
        {
            buildingTextAmount.enabled = true;
        }
    }

    private void UpdateCPS()
    {
        buildingCPS = buildingDefaultCPS * buildingAmount;
        //Buildings.GetAllBuildingsCPS();
    }

    private void UpdateCost()
    {
        if (buildingAmount != 0)
        {
            //buildingCost = buildingCost * Main.buildingCostIncrease;
        }

        int newBuildingCost = (int)buildingCost;
        buildingTextCost.text = newBuildingCost.ToString();
    }
}
