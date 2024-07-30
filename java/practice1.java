import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.*;
class TestClass {
    public static void main(String args[] ) throws Exception {
        //BufferedReader
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String name = br.readLine();                // Reading input from STDIN
        String[] input = name.split(" ");
        System.out.println(needleInHayStack(input[1], input[0]));    // Writing output to STDOUT
    }

    private static int needleInHayStack(String needle, String haystack){
        char[] arr = haystack.toCharArray();

        for(int i=0; i<haystack.length(); i++) {
            if(arr[i] == needle.charAt(0)) {
                for(int j=0; j<needle.length(); j++) {
                    if((arr[i+j] == needle.charAt(j)) && (j < needle.length())) {
                        if(j == needle.length() -1)
                            return i;
                    }
                }
            }
            
        }

        return -1;
    }
}

