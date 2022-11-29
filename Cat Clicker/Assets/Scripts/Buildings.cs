using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Buildings : MonoBehaviour
{
    public List<CatBuilding> buildings = new List<CatBuilding>();
    public GameObject prefabCatBuildings;
    public Transform parentPrefab;

    public static float buildingCostIncrease = 1.07f;
    public double buildingsCPS;

    public void Awake()
    {
        // ADD BUILDINGS TO A LIST
        #region BUILDINGS
        buildings.Add(
            new CatBuilding
            {
                buildingName = "Paw",
                buildingCost = 15D,
                buildingDefaultCPS = 0.2D
            }
        );

        buildings.Add(
            new CatBuilding
            {
                buildingName = "Bakery",
                buildingCost = 100D,
                buildingDefaultCPS = 1D
            }
        );
        buildings.Add(
            new CatBuilding
            {
                buildingName = "Farmer",
                buildingCost = 1100D,
                buildingDefaultCPS = 8D
            }
        );
        buildings.Add(
            new CatBuilding
            {
                buildingName = "Miner",
                buildingCost = 12000D,
                buildingDefaultCPS = 260D
            }
        );
        buildings.Add(
            new CatBuilding
            {
                buildingName = "Banker",
                buildingCost = 1400000D,
                buildingDefaultCPS = 1400D
            }
        );
        buildings.Add(
            new CatBuilding
            {
                buildingName = "Temple",
                buildingCost = 20000000D,
                buildingDefaultCPS = 7800D
            }
        );
        buildings.Add(
            new CatBuilding
            {
                buildingName = "Wizard",
                buildingCost = 330000000,
                buildingDefaultCPS = 44000D
            }
        );
        buildings.Add(
            new CatBuilding
            {
                buildingName = "Astronaut",
                buildingCost = 5100000000D,
                buildingDefaultCPS = 260000D
            }
        );
        buildings.Add(
            new CatBuilding
            {
                buildingName = "Portal",
                buildingCost = 10000000000000,
                buildingDefaultCPS = 10000000D
            }
        );
        buildings.Add(
            new CatBuilding
            {
                buildingName = "Time Machine",
                buildingCost = 14000000000000D,
                buildingDefaultCPS = 65000000D
            }
        );
        buildings.Add(
            new CatBuilding
            {
                buildingName = "Antimatter Condenser",
                buildingCost = 170000000000000D,
                buildingDefaultCPS = 430000000D
            }
        );
        buildings.Add(
            new CatBuilding
            {
                buildingName = "Prism",
                buildingCost = 2100000000000000D,
                buildingDefaultCPS = 2900000000D
            }
        );
        buildings.Add(
            new CatBuilding
            {
                buildingName = "Chancemaker",
                buildingCost = 26000000000000000D,
                buildingDefaultCPS = 21000000000D
            }
        );
        buildings.Add(
            new CatBuilding
            {
                buildingName = "Javascript Console",
                buildingCost = 71000000000000000000D,
                buildingDefaultCPS = 1100000000000D
            }
        );

        buildings.Add(
            new CatBuilding
            {
                buildingName = "Idleverse",
                buildingCost = 12000000000000000000000D,
                buildingDefaultCPS = 8300000000000D
            }
        );
        buildings.Add(
            new CatBuilding
            {
                buildingName = "Cortex Baker",
                buildingCost = 1900000000000000000000000D,
                buildingDefaultCPS = 64000000000000D
            }
        );
        #endregion

        // CREATE BUILDING
        int index = 0;
        foreach (var building in buildings)
        {
            var obj = Instantiate(prefabCatBuildings);
            obj.transform.SetParent(parentPrefab);
            obj.transform.localPosition = new Vector3(0, 256 - index * 64, 0);

            index++;
        }
    }

    public void BuildingBuy()
    {
        //buildingAmount += 1;

        // if (buildingTextAmount.enabled == false)
        // {
        //     buildingTextAmount.enabled = true;
        // }
    }

    private void UpdateCPS()
    {
        foreach (var building in buildings)
        {
            //buildingsCPS += buildings.buildingAmount;
        }
        //buildingCPS = buildings.buildingDefaultCPS * buildingAmount;
        //Buildings.GetAllBuildingsCPS();
    }

    private void UpdateCost()
    {
        //if (buildingAmount != 0)
        //{
        //    buildingCost = buildingCost * Main.buildingCostIncrease;
        //}
    }
}
