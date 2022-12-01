using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Building : MonoBehaviour
{
    public string buildingName;
    public double buildingCost;
    public double buildingDefaultCPS;

    public int buildingAmount;
    private double buildingCPS;

    [SerializeField]
    private GameObject buildingText;

    [SerializeField]
    private TextMeshProUGUI buildingTextName;

    [SerializeField]
    private TextMeshProUGUI buildingTextCost;

    [SerializeField]
    private TextMeshProUGUI buildingTextAmount;

    [SerializeField]
    private GameObject buildingImg;

    public void Awake()
    {
        //ADD TEXT TO GAMEOBJECT
        buildingTextName.text = buildingName;
        UpdateText();
        buildingImg.GetComponent<Image>().color = new Color(0, 0, 0);
    }

    public void Start()
    {
        //ADD GAMEOBJECT TO BUILDINGS LIST
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

    public void EnableDisplay()
    {
        if (!buildingImg.activeSelf)
        {
            if (buildingCost <= CatCookie.catsCount)
            {
                buildingText.SetActive(true);
                buildingImg.SetActive(true);
            }
        }
        if (buildingImg.activeSelf)
        {
            if (buildingAmount != 0) { }
        }
    }
}
