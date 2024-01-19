// Sortings : Arrange the order in ascending order of given unarranged array 
// Selection Sort
// Find the minimum element in unsorted array and swap it with element at beginning 

#include<bits/stdc++.h>
using namespace std;

void printArray(int arr[], int n)
{
    for(int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }
    cout << endl;
}

// selection sort compare the element and swap the minimum value by the biginning element in the array

void selectionSort(int arr[], int n)
{
    // int minimum = INT_MAX;
    for(int i = 0; i < n; i++){
        for(int j = i+1; j <= n; j++){
            if(arr[i] > arr[j]){
                swap(arr[i], arr[j]);
            }
        }
    }
    printArray(arr, n);
}

// bubble sort : Repeatadly swap two adjacent element if they are in wrong position 

// void bubbleSort(int arr[], int n)
// {
//     int conter = 1;
//     while (conter < n)
//     {
//         /* code */
//         for(int i = 0; i < (n-conter); i++){
//             if(arr[i] > arr[i+1]){
//                 swap(arr[i], arr[i+1]);
//             }
//         }
//         conter++;
//     }
//     printArray(arr, n);
// }

void bubbleSort(int arr[], int n)
{
    int counter = 1;
    while (counter < n)
    {
        /* code */
        {
            for (int i = 0; i < (n-counter); i++)
            {
                /* code */
                if(arr[i] > arr[i+1]){
                    swap(arr[i], arr[i+1]);
                }
            }
            counter++;
            
        }
    }
    printArray(arr, n);
    
}

// insetion sort : it is a simple algorithm that works similar to arranges the cards in our hands
// insert an element from unsorted array to its correct position in sorted array

void insertionSort(int arr[], int n)
{
    for(int i = 1; i < n; i++){
        int currVal = arr[i];
        int j = i-1;
        while (arr[j] > currVal)
        {
            /* code */
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = currVal;
    }
    printArray(arr, n);
}

int main()
{
    int arr[] = {12, 45, 23, 51, 19, 8};
    int n = sizeof(arr)/sizeof(arr[0]);
    // selectionSort(arr,n);
    // printArray(arr, n);
    // bubbleSort(arr, n);
    insertionSort(arr, n);
    return 0;
}