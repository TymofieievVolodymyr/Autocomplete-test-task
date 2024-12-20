import { Box, TextField } from "@mui/material";

interface CourseSearchProps {
    setSearchTerm: (value: string) => void;
}

export const CourseSearch = ({ setSearchTerm }: CourseSearchProps) => {
    return (
        <TextField
            placeholder="Search"
            size="small"
            fullWidth
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
};
