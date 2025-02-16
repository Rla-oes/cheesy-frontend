import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [menus, setMenus] = useState([]);
  const [savedMenus, setSavedMenus] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const anonymousId = 'user-uuid'; // 고유한 사용자 식별자

  // 카테고리 목록 조회
  useEffect(() => {
    axios.get('/api/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('카테고리 목록 조회 오류:', error));
  }, []);

  // 특정 카테고리의 메뉴 조회
  const fetchMenus = (categoryId) => {
    setSelectedCategoryId(categoryId);
    axios.get('/api/menus', { params: { category_id: categoryId } })
      .then(response => setMenus(response.data))
      .catch(error => console.error('메뉴 조회 오류:', error));
  };

  // 저장된 메뉴 목록 조회
  const fetchSavedMenus = () => {
    axios.get('/api/saved-menus', { params: { anonymous_id: anonymousId } })
      .then(response => setSavedMenus(response.data))
      .catch(error => console.error('저장된 메뉴 조회 오류:', error));
  };

  // 컴포넌트 마운트 시 저장된 메뉴 목록 조회
  useEffect(() => {
    fetchSavedMenus();
  }, []);

  // 메뉴 저장
  const saveMenu = (menuId) => {
    axios.post('/api/saved-menus', { anonymous_id: anonymousId, menu_id: menuId })
      .then(() => {
        alert('메뉴가 저장되었습니다.');
        fetchSavedMenus(); // 저장 후 목록 갱신
      })
      .catch(error => console.error('메뉴 저장 오류:', error));
  };

  // 저장된 메뉴 삭제
  const deleteSavedMenu = (menuId) => {
    axios.delete(`/api/saved-menus/${menuId}`)
      .then(() => {
        alert('메뉴가 삭제되었습니다.');
        fetchSavedMenus(); // 삭제 후 목록 갱신
      })
      .catch(error => console.error('메뉴 삭제 오류:', error));
  };

  return (
    <div className="container">
      <div className="header">
        <button id="backButton">뒤로</button>
        <span>카테고리</span>
        <button id="homeButton">홈</button>
      </div>

      {/* 카테고리 버튼 목록 */}
      <div className="button-container">
        {categories.map((category) => (
          <button
            key={category.id}
            className="button"
            onClick={() => fetchMenus(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* 선택된 카테고리의 메뉴 목록 */}
      {selectedCategoryId && (
        <div className="menu-container">
          <h3>메뉴 목록</h3>
          {menus.map((menu) => (
            <div key={menu.id} className="menu-item">
              <span>{menu.name}</span>
              <button onClick={() => saveMenu(menu.id)}>저장</button>
            </div>
          ))}
        </div>
      )}

      {/* 저장된 메뉴 목록 */}
      <div className="saved-menus">
        <h3>저장된 메뉴</h3>
        {savedMenus.map((menu) => (
          <div key={menu.menu_id} className="menu-item">
            <span>{menu.menu_name}</span>
            <button onClick={() => deleteSavedMenu(menu.menu_id)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;