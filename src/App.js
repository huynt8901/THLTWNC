import Header from './Header';
import Hello from './Hello'; // Xuất mặc định
import { HelloPerson } from './Hello'; // Nhập HelloPerson từ cùng file
import Car from './Car';

function App() {
    return (
        <div className="App">
            <Header />
            <Hello />
            <Car />
            <HelloPerson name="Tên Sinh Viên" />
        </div>
    );
}

export default App;
