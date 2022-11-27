using UnityEngine;
using TMPro;

public class CatsGlobal : MonoBehaviour
{
    public float catsCount;
    public float catsPerSecond;
    public float catsPerClick;

    public TextMeshProUGUI catsText;

    public static float buildingCostIncrease = 1.07f;

    public void Start()
    {
        catsCount = 0f;
        catsPerSecond = 0f;
        catsPerClick = 1f;
    }

    public void Update()
    {
        catsCount += catsPerSecond * Time.deltaTime;
        catsText.text = "Cats:\n" + (int)catsCount;
    }

    public void CatClick()
    {
        catsCount += catsPerClick;
    }
}
