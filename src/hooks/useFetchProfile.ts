import { useState, useEffect } from 'react';
import { fetchUserProfile } from '../utils/userUtils';
import { UserProfile } from '../constants/type';
import { isTokenValid } from '../utils/basicUtils';
import { getAuthHeaders } from '../utils/basicUtils';

const useFetchProfile = () => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProfile = async () => {
            if (!isTokenValid()) {
                setError('User not authenticated');
                return;
            }

            try {
                const profileData = await fetchUserProfile();
                console.log('HEADER: ', getAuthHeaders());
                console.log('Profile data received from server:', profileData);
                setProfile(profileData);
            } catch (error) {
                console.error('Error fetching profile:', error);
                setError('Could not load profile');
            }
        };

        loadProfile();
    }, []);

    return { profile, error };
};

export default useFetchProfile;
