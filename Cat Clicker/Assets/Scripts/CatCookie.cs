using UnityEngine;
using TMPro;

public class CatCookie : MonoBehaviour
{
    public static double catsCount;
    public static double catsPerSecond;
    public static double catsPerClick;

    [SerializeField]
    private TextMeshProUGUI catsText;

    public void Start()
    {
        catsCount = 100;
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
