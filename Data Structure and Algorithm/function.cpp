// print all the values between two numbers using function
#include<bits/stdc++.h>
using namespace std;

// bool isPrime(int num)
// {
//     for(int i = 2; i <= sqrt(num); i++){
//         if(num % i == 0){
//             return false;
//         }
//     }
//     return true;
// }

// void fib(int n)
// {
//     int t1 = 0;
//     int t2 = 1;
//     int nextTerm;

//     for(int i  = 1; i <= n; i++){
//         cout << t1 << " ";
//         nextTerm = t1 + t2;
//         t1 = t2;
//         t2 = nextTerm;
//     }
// }

// int fib(int n)
// {
//     if(n <= 1){
//         return n;
//     }
//     return fib(n-1) + fib(n-2);
    // }

int factorial(int n){
    int fact = 1;
    for(int i = 2; i <= n; i++){
        fact *= i;
    }
    return fact;
}
int main()
{
    // int n = 15;
    // int m = 30;
    // for(int i = n; i <= m; i++){
    //     if(isPrime(i)){
    //         cout << i << " ";
    //     }
    // }
    // int n = 5;
    // // cout << fib(n);
    // cout << factorial(n) << endl;
    // return 0;


    //pascal triangle 
    int n = 5;
    for(int i = 0; i < 5; i++){
        for(int j = 0; j <= i; j++){
            cout << (factorial(i)/(factorial(j)*factorial(i-j))) << " ";
        }
        cout << endl;
    }
}