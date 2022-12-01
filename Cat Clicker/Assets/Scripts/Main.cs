using System.Collections.Generic;
using UnityEngine;

public class Main : MonoBehaviour
{
    public static float buildingCostIncrease = 1.07f;

    public static GameObject catCookie;
    public static CatCookie catCookieScript;
    public static List<GameObject> buildingsList;

    public void Awake()
    {
        buildingsList = new List<GameObject>();
    }

    private void Update()
    {
        if (catCookieScript == null)
        {
            catCookieScript = catCookie.GetComponent<CatCookie>();
        }

        foreach (var building in buildingsList)
        {
            // if (building.activeSelf)
            // {
            //     var buildingScript = building.gameObject.GetComponent<Building>();
            //     if (CatCookie.catsCount >= buildingScript.buildingCost)
            //     {
            //         building.SetActive(true);
            //     }
            // }
        }
    }

    public static void UpdateCPS()
    {
        double newCPS = 0;
        foreach (var building in buildingsList)
        {
            var buildingScript = building.gameObject.GetComponent<Building>();
            newCPS += buildingScript.buildingDefaultCPS * buildingScript.buildingAmount;
        }

        catCookieScript.UpdateCatsPerSecond(newCPS);
    }
<<<<<<< Updated upstream
=======

    public void CheatModeEnable()
    {
        var cheatScript = cheatMode.GetComponent<CheatMode>();

        cheatScript.enabled = !cheatScript.enabled;

        cheatScript.UpdateText();
    }
>>>>>>> Stashed changes
}
