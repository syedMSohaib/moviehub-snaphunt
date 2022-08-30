import { useNavigate, useParams, useLocation } from 'react-router-dom';

export const withRouter = (Component: any) => {
  const Wrapper = (props: any) => {
    const navigate = useNavigate();
    const params = useParams();
    const locate = useLocation();

    return (
      <Component
        navigate={navigate}
        params={params}
        locate={locate}
        {...props}
        />
    );
  };

  return Wrapper;
};