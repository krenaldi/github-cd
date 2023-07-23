import App from "../App";
import { renderWithProviders } from "../utils/test-utils";

test("App renders", () => {
  renderWithProviders(<App />);
});
