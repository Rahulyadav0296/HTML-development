// max array 
#include<bits/stdc++.h>
using namespace std;

// int maxArray(int arr[], int n)
// {
//     int maxVal = 0;
//     for(int i = 0; i < n; i++){
//         if(maxVal <= arr[i]){
//             maxVal = max(arr[i], maxVal);
            
//         }
//         cout << maxVal << " ";
//     }
// }

// longest arthmetic subarray
// contain arthmetic array at least two integers and the difference between consecutive integers are equal 
// [9, 10], [3, 3, 3], [9, 7, 5, 3]

int longestSubArray(int arr[], int n)
{
    int diff = 0;
    int max_diff = 0;
    int count = 0; 
    int max_count = 0;
    for(int i = 0; i < n; i++){
        if((arr[i+1] - arr[i]) > diff){
            diff = arr[i+1] - arr[i];
            if(diff > max_diff){
                max_diff = diff;
                count++;
            }
        }
        if(count > max_count){
            max_count = count;
        }
    }
    return max_count;
}

int main()
{
    int arr[] = {10, 7, 4, 6, 8, 10, 11};
    int n = sizeof(arr)/sizeof(arr[0]);
    return 0;
}

