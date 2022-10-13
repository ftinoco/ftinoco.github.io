import { render, screen } from "@testing-library/react";
import { Profile } from "..";
import { IProfileProps } from "../interfaces";
import { defaultValues } from '../../../utils/consts/portfolio';

describe('<Profile/>', () => {
    const profileProps: IProfileProps = {
        fullName: `${defaultValues.profile.firstName} ${defaultValues.profile.lastName}`,
        profile: defaultValues.profile,
        socialMedias: defaultValues.socialMedia
    }

    it('should render', async () => {
        render(<Profile
            fullName={profileProps.fullName}
            profile={profileProps.profile}
            socialMedias={profileProps.socialMedias} />);

        expect(screen.getByTestId('fullname-title')).toBeInTheDocument();
        expect(screen.getByTestId('socialmedia')).toBeInTheDocument();
        expect(screen.getByTestId('age')).toHaveTextContent('30');
    });
});