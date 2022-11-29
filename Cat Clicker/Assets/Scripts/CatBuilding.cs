using System;

public class CatBuilding
{
    public string buildingName { get; set; }
    public double buildingCost { get; set; }
    public double buildingDefaultCPS { get; set; }
    public int buildingAmount;

    public void Start()
    {
        buildingAmount = 0;
    }
}
