using System.Collections.Generic;
using UnityEngine;

public class Main : MonoBehaviour
{
    public static float buildingCostIncrease = 1.07f;

    public static GameObject catCookie;
    public static List<GameObject> buildingsList;
    public GameObject cheatMode;

    private void Awake()
    {
        buildingsList = new List<GameObject>();
    }

    public static void UpdateCPS()
    {
        double newCPS = 0;
        foreach (var building in buildingsList)
        {
            var buildingScript = building.gameObject.GetComponent<Building>();
            newCPS += buildingScript.buildingDefaultCPS * buildingScript.buildingAmount;
        }

        var catScript = catCookie.GetComponent<CatCookie>();
        catScript.UpdateCatsPerSecond(newCPS);
    }

    public void CheatModeEnable()
    {
        var cheatScript = cheatMode.GetComponent<CheatMode>();

        if (cheatScript.enabled)
        {
            cheatScript.enabled = !cheatScript.enabled;
        }
        else
        {
            cheatScript.enabled = true;
        }

        cheatScript.UpdateText();
    }
}
