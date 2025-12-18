import seed from "@/lib/seed";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
    return (
        <SafeAreaView>
            <Text>Search</Text>

            <Button title="Seed" onPress={() => seed().catch((error) => console.log('Failed to seed the database.', error))} />
        </SafeAreaView>
    )
}

export default Search;