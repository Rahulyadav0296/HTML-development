#include<bits/stdc++.h>
using namespace std;

int main()
{
    // inverted Pattern
    // for(int i = 5; i > 0; i--){
    //     for(int j = 1; j <= i; j++){
    //         cout << j << " "; 
    //     }
    //     cout << endl;
    // }

    // int n = 5;
    // for(int i = 1; i <= n; i++){
    //     for(int j = 1; j <= (n + 1 - i); j++){
    //         cout << j << " "; 
    //     }
    //     cout << endl;
    // }


    // 0-1 Pattern
    int n = 5; 
    // for(int i = 1; i< n; i++){
    //     for(int j = 1; j <= i; j++){
    //         if(((i + j)%2) == 0){
    //             cout << "1" << " "; 
    //         }else
    //         {
    //             cout << "0" << " "; 
    //         }
            
    //     }
    //     cout << endl;
    // }

    //Rhombus pattern
    // for(int i = 1; i <= n; i++){
    //     for(int j = 1; j <= n-i; j++){
    //         cout << " " << " ";  
    //     }
    //     for(int j = 1; j <= n; j++){
    //         cout << "*" << " "; 
    //     }
    //     cout << endl;
    // }
    
    // Number Pattern
    // int n = 5;
    // int count = 0;
    // for(int i = 1;i <= n; i++){
    //     for(int j = 1; j <= (n-i) ; j++){
    //         cout << "$" << " ";
    //     }
    //     for(int j = 1; j <= i; j++){
    //         cout << j << " ";
    //     }
        
    //     cout << endl;
    // }

    //Palindromic Pattern
    for(int i = 0; i <= n; i++){
        int j;
        for (j = 1; j <= n-i; j++)
        {
            /* code */
            cout << " ";
        }
        int k = i;
        for (; j <= n; j++)
        {
            /* code */
            cout<<k-- << " ";
        }
        k = 2;
        for(;j <= n+i-1; j++){
            cout << k++ << " ";
        }
        
        cout << endl;
    }

    
    return 0;
}