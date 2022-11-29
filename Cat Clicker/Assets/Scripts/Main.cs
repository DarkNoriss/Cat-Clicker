using System.Collections.Generic;
using UnityEngine;

public class Main : MonoBehaviour
{
    public static float buildingCostIncrease = 1.07f;

    [SerializeField]
    private GameObject catCookie;

    public static List<GameObject> buildingsList;

    public void Awake()
    {
        buildingsList = new List<GameObject>();
    }

    public static void UpdateCPS()
    {
        double newCPS = 0;
        foreach (var a in buildingsList)
        {
            var b = a.gameObject.GetComponent<Building>();
            newCPS = b.buildingDefaultCPS * b.buildingAmount;
        }

        print(newCPS);
        CatCookie.catsPerSecond = newCPS;
    }
}
