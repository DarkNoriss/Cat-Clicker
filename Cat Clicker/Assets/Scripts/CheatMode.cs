using System.Collections;
using UnityEngine;
using TMPro;

public class CheatMode : MonoBehaviour
{
    private CatCookie catCookie;

    [SerializeField]
    private TextMeshProUGUI textOFF;

    [SerializeField]
    private TextMeshProUGUI textON;

    [SerializeField]
    private float timer;

    [SerializeField]
    private float when;

    // Start is called before the first frame update
    private void Start()
    {
        this.catCookie = Main.catCookie.GetComponent<CatCookie>();

        timer = 0;
    }

    private void Update()
    {
        timer += Time.deltaTime;
        if (timer >= when)
        {
            timer -= when;
            catCookie.CatClick();
        }
    }

    public void UpdateText()
    {
        if (this.gameObject.GetComponent<CheatMode>().enabled)
        {
            textOFF.enabled = false;
            textON.enabled = true;
        }
        else
        {
            textOFF.enabled = true;
            textON.enabled = false;
        }
    }
}
