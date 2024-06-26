//Jose Rivera Girata
// CC. 1052400502
// TGI TIC 3
using System;
class Program
{
    static void Main(string[] args)
    {
        int[] numeros = { 10, 5, 20, 15, 30 };
        int maximo = EncontrarMaximo(numeros);
        Console.WriteLine(" el maximo es: " + maximo);
    }
    static int EncontrarMaximo(int[] arreglo)
    {
        int max = arreglo[0];
        for (int i = 0; i < arreglo.Length; i++)
        {
            if (arreglo[i] > max)
            {
                max = arreglo[i];
            }
        }
        return max;


    }
}