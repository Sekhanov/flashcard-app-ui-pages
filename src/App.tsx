import {Routes, Route, HashRouter} from 'react-router-dom';
import {AuthProvider} from './components/AuthProvider';
import {LoginPage} from './components/LoginPage';
import {Home} from './components/Home';
import {RegisterPage} from './components/RegisterPage';
import {Library} from './components/Library';
import {Layout} from './components/Layout';
import {FlashcardSetForm} from './components/FlashcardSetForm';
import {FlashcardSet} from './components/FlashcardSet';
import { WriteTerm } from './components/WriteTerm';
import {MultipleChoice} from "./components/MultipleChoice.tsx";

function App() {
    return (
        <AuthProvider>
            <HashRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route element={<Layout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/library" element={<Library/>}/>
                        <Route path="/add-flashcard-set" element={<FlashcardSetForm/>}/>
                        <Route path="/flashcard-set/:id" element={<FlashcardSet/>}/>
                        <Route path="/flashcard-set/:id/edit" element={<FlashcardSetForm/>}/>
                        <Route path="/flashcard-set/:id/written" element={<WriteTerm />} />
                        <Route path="/flashcard-set/:id/multipleChoice" element={<MultipleChoice />} />
                    </Route>
                </Routes>
            </HashRouter>
        </AuthProvider>
    );
}

export default App;
