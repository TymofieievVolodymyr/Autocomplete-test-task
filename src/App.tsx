import { Stack, Container } from "@mui/material";
import { CourseSearch } from "./CourseSearch";
import { CourseList } from "./CourseList";
import {useState} from "react";


/*
Requirements:
1. Search with Autocomplete
  - Debounced API calls (350ms)
  - Show suggestions while typing
  - Display item title, description, category, tags
  - (bonus) Highlight matching text in suggestions

2. Selection Management
  - Selected items shown in separate section below search
  - Option to remove items from selection
  - Visual indicator for already selected items
*/

export default function App() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <Container component="main">
            <Stack gap={2} mt={3}>
                <CourseSearch setSearchTerm={setSearchTerm} />
                <CourseList searchTerm={searchTerm} />
            </Stack>
        </Container>
    );
}
