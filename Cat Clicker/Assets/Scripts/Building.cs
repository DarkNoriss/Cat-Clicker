using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Building : MonoBehaviour
{
    public string buildingName { get; set; }
    public double buildingCost { get; set; }
    public double buildingDefaultCPS { get; set; }

    private int buildingAmount;
    private double buildingCPS;
}
