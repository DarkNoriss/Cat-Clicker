using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Buildings : MonoBehaviour
{
    public List<CatBuilding> buildings = new List<CatBuilding>();
    public GameObject prefab;
    public Transform parentPrefab;

    public void Awake()
    {
        // ADD BUILDINGS TO A LIST
        buildings.Add(
            new CatBuilding
            {
                buildingName = "Paw",
                buildingCost = 15,
                buildingDefaultCPS = 0.2f
            }
        );

        buildings.Add(
            new CatBuilding
            {
                buildingName = "Bakery",
                buildingCost = 100,
                buildingDefaultCPS = 1
            }
        );

        // CREATE BUILDING
        int index = 0;
        foreach (var building in buildings)
        {
            var obj = Instantiate(prefab);
            obj.transform.SetParent(parentPrefab);
            obj.transform.SetLocalPositionAndRotation(
                new Vector3(0, 288 - index * 64, 0),
                Quaternion.identity
            );

            index++;
        }
    }

    public void Start() { }
}
