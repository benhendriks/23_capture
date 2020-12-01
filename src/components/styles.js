import styled from "styled-components";

const HomeStyle = styled.div`
  margin: 20px;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  .description {
    flex: 1;
    padding-right: 5rem;
    z-index: 2;
    h2 {
      font-weight: lighter;
    }
  }
  .image {
    flex: 1;
    overflow: hidden;
    z-index: 2;
    img {
      width: 100%;
      height: 80vh;
      object-fit: cover;   
    }
  }
  .hide {
    overflow: hidden;
  }
`;

export default HomeStyle;