using UnityEngine;
using TMPro;

public class CatCookie : MonoBehaviour
{
    public static double catsCount;
    public static double catsPerSecond;
    public static double catsPerClick;

    [SerializeField]
    private TextMeshProUGUI catsCountText;

    [SerializeField]
    private TextMeshProUGUI catsPerSecondText;

    public void Awake()
    {
        catsCount = 200;
        catsPerSecond = 0D;
        catsPerClick = 1D;
    }

    public void Start()
    {
        Main.catCookie = this.gameObject;
        UpdateCatsPerSecond(catsPerSecond);
    }

    public void Update()
    {
        //ADDING CATS PER SECOND TO CAT COUNT
        catsCount += catsPerSecond * Time.deltaTime;
        catsCountText.text = "Cats:\n" + (int)catsCount;
    }

    public void CatClick()
    {
        catsCount += catsPerClick;
    }

    public void UpdateCatsPerSecond(double newCPS)
    {
        catsPerSecond = newCPS;
        catsPerSecondText.text = "per second : " + System.Math.Round(newCPS, 2);
    }
}
