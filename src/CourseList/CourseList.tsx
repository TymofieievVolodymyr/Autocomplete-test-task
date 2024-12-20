import {Box, Chip, Stack, TextField, Typography} from "@mui/material";
import {mockData} from "../services/mocks";
import {useEffect, useState} from "react";
import {useDebounce} from "../hooks/useDebounce";

interface CourseListProps {
    searchTerm: string;
}

export const CourseList = ({ searchTerm }: CourseListProps) => {
    const [suggestions, setSuggestions] = useState([]);

    const fetchSuggestions = () => {
        if (!searchTerm.trim()) {
            setSuggestions([]);
            return;
        }

        const lowercasedTerm = searchTerm.toLowerCase();
        const filtered = mockData.filter((item) =>
            item.title.toLowerCase().includes(lowercasedTerm)
        );
        setSuggestions(filtered);
    };

    const debouncedFetchSuggestions = useDebounce(fetchSuggestions);

    useEffect(() => {
        debouncedFetchSuggestions();
    }, [searchTerm, debouncedFetchSuggestions]);

    return (
        <Box width={400} mx="auto">
            {suggestions.length > 0 ? (
                <Stack spacing={2}>
                    {suggestions.map((item) => (
                        <Box key={item.id}>
                            <Typography variant="subtitle1">{item.title}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                Category: {item.category}
                            </Typography>
                            <Stack direction="row" spacing={1} mt={1}>
                                {item.tags.map((tag) => (
                                    <Chip key={tag} label={tag} size="small" />
                                ))}
                            </Stack>
                        </Box>
                    ))}
                </Stack>
            ) : null}
        </Box>
    );
};
