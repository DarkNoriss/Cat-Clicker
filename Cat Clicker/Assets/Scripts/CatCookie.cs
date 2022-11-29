using UnityEngine;
using TMPro;

public class CatCookie : MonoBehaviour
{
    public static double catsCount { get; set; }
    public static double catsPerSecond { get; set; }
    public static double catsPerClick { get; set; }

    [SerializeField]
    private TextMeshProUGUI catsText;

    public void Start()
    {
        catsCount = 0D;
        catsPerSecond = 0D;
        catsPerClick = 1D;
    }

    public void Update()
    {
        //ADDING CATS PER SECOND TO CAT COUNT
        catsCount += catsPerSecond * Time.deltaTime;
        catsText.text = "Cats:\n" + (int)catsCount;
    }

    public void CatClick()
    {
        catsCount += catsPerClick;
    }
}
