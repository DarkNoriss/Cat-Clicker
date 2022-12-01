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

    private void Awake()
    {
        catsCount = 0;
        catsPerSecond = 0D;
        catsPerClick = 1D;
    }

    private void Start()
    {
        //ADD CATCOOKIE OBJECT TO VAR IN MAIN
        Main.catCookie = this.gameObject;
        UpdateCatsPerSecond(catsPerSecond);
    }

    private void Update()
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
