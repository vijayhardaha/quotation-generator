/**
 * Package dependancies
 */
import { Form } from "react-bootstrap";

/**
 * Local dependancies
 */

/**
 * Main Component
 */
const Title = ({ value, setData }) => {
	return (
		<Form.Group controlId="title">
			<Form.Label>Project Title</Form.Label>
			<Form.Control
				type="text"
				value={value}
				placeholder="Write your project title"
				onChange={(e) => setData({ title: e.target.value })}
			/>
		</Form.Group>
	);
};

// Default Export
export default Title;
