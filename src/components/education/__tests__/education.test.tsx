import { render, screen, waitFor } from "@testing-library/react";
import { Education } from "..";
import { educationData$ } from "../../../services/education-service";
import { defaultValues } from "../../../utils/consts/portfolio";

describe('<Education/>', () => {
    beforeEach(async () => {
        jest.clearAllMocks();
        educationData$.next(
            defaultValues.educationData ?? []
        );
    });

    it('should render', async () => {
        render(<Education />);

        await waitFor(() => expect(
            screen.getByTestId('education-title')
        ).toBeInTheDocument());

        expect(
            screen.getAllByRole('education-institution')
        ).toHaveLength(2);
    });
});