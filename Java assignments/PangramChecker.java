import java.util.*;

public class PangramChecker {
    public static boolean isPangram(String sentence) {
        Set<Character> alphabet = new HashSet<>();
        for (char ch = 'a'; ch <= 'z'; ch++) {
            alphabet.add(ch);
        }

        sentence = sentence.toLowerCase();

        for (char ch : sentence.toCharArray()) {
            if (alphabet.contains(ch)) {
                alphabet.remove(ch);
            }
        }

        return alphabet.isEmpty();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String inputSentence = scanner.nextLine();

        if (isPangram(inputSentence)) {
            System.out.println("'" + inputSentence + "' is a pangram.");
        } else {
            System.out.println("'" + inputSentence + "' is not a pangram.");
        }
    }
}
