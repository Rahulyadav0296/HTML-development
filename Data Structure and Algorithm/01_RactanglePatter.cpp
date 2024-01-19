#include<bits/stdc++.h>
using namespace std;
int main()
{
    //printing the patter of * 
    // for(int i = 0; i < 5;i++){
    //     for(int j = 0; j < 5; j++){
    //         cout << "*" << " ";
    //     }
    //     cout << endl;
    // }

    //Hallow Rectangle Pattern
    // for(int i = 0; i < 5; i++){
    //     for(int j = 0; j < 5; j++){
    //         if(i == 0 || i == 4 || j == 0 || j == 4){
    //             cout << "*" << " ";
    //         } else{
    //             cout << "-"  << " ";
    //         }
    //     }
    //     cout << endl;
    // }

    // inverted half paramid pattern
    // for(int i = 5; i > 0; i--){
    //     for(int j = 0; j < i; j++){
    //         cout << "*" << " ";
    //     }
    //     cout << endl;
    // }

    // Half Pyramid after 180 degree Rotation
    // for(int i = 0; i<= 5; i++){
    //     for (int j = 0; j <= 5; j++)
    //     {
    //         /* code */
    //         if(j < 6-i){
    //             cout << " ";
    //         }
    //         else
    //         {
    //             cout << "*" << "";
    //         }
            
    //     }
    //     cout << endl;
        
    // }

    // Half paramid using numbers 
    // for(int i = 1; i <= 5; i++){
    //     for(int j = 1; j <= i; j++){
    //         cout << i << " ";
    //     }
    //     cout << endl;
    // }

    // Floyd's Triangle 
    // int count = 0;
    // for(int i =1;i <= 5; i++){
    //     for(int j = 1; j <= i; j++){
    //         count++;
    //         cout << count << " "; 
    //     }
    //     cout << endl;
    // }

    // butterfly Pattern 
    int n = 5;
    for(int i = 1; i <= n; i++){
        for(int j = 1; j <= i; j++){
            cout << "*";
        }
        int space = 2*n - 2*i;
        for(int j = 1; j <= space; j++){
            cout << " ";
        }
        for(int j = 1; j <= i; j++){
            cout << "*";
        }
        cout << endl;
    }

    for(int i = n-1; i >= 0; i--){
        for(int j = 1; j <= i; j++){
            cout << "*";
        }
        int space = 2*n - 2*i;
        for(int j = 1; j <= space; j++){
            cout << " ";
        }
        for(int j = 1; j <= i; j++){
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}