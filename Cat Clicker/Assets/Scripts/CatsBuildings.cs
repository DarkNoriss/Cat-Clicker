using UnityEngine;
using TMPro;

public class CatsBuildings : MonoBehaviour
{
    [SerializeField]
    private string buildingName;

    [SerializeField]
    private float buildingCost;

    [SerializeField]
    private int buildingDefaultCPS;
    public static float buildingCPS;

    [SerializeField]
    private TextMeshProUGUI buildingTextName;

    [SerializeField]
    private TextMeshProUGUI buildingTextCost;

    [SerializeField]
    private TextMeshProUGUI buildingTextAmount;

    private int buildingAmount;

    public void Start()
    {
        buildingTextName.text = buildingName;
        UpdateCost();
    }

    public void BuildingBuy()
    {
        buildingAmount += 1;
        buildingTextAmount.text = buildingAmount.ToString();
        UpdateCost();
        UpdateCPS();
    }

    private void UpdateCPS()
    {
        buildingCPS = buildingDefaultCPS * buildingAmount;
    }

    private void UpdateCost()
    {
        if (buildingAmount != 0)
        {
            buildingCost = buildingCost * Main.buildingCostIncrease;
        }

        int newBuildingCost = (int)buildingCost;
        buildingTextCost.text = newBuildingCost.ToString();
    }
}
