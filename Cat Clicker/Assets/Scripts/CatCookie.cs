using UnityEngine;
using TMPro;

public class CatCookie : MonoBehaviour
{
    public float catsCount { get; set; }
    public float catsPerSecond { get; set; }
    public float catsPerClick { get; set; }

    [SerializeField]
    private TextMeshProUGUI catsText;

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
