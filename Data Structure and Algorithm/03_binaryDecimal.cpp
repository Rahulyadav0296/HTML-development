#include<bits/stdc++.h>
using namespace std;

int main()
{
    // decimal to binary converter 
    // check the number is prime or not
    // int num = 13;
    // bool flag = 0;
    // for(int i = 2; i < sqrt(num); i++){
    //     if(i%2 == 0){
    //         cout << "Number is Non-prime";
    //         flag = 1;
    //         break;
    //     }
    // }

    // if(flag == 0){
    //     cout << "Number is Prime";
    // }

    //reverse A number 
    // int n = 1234;
    // int reverse = 0;

    // while (n != 0)
    // {
    //     /* code */
    //     int lastDigit = n%10;
    //     reverse = reverse*10 + lastDigit;
    //     n /= 10;
    // }
    // cout << reverse;
    
    // armstrong number 
    int n = 153;

    int sum = 0;
    int result;
    int originalNum = n;
    while (n > 0)
    {
        /* code */
        int lastDigit = n % 10;
        sum += pow(lastDigit, 3);
        n /= 10;
    }
    if(originalNum == sum){
        cout << "Number is Armstrong." << endl;
    }
    else{
        cout << "Not armstrong";
    }
    return 0;
}