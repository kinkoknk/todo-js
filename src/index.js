import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  if (inputText == "") {
    return;
  } else {
    document.getElementById("add-text").value = "";
    createIncomplateList(inputText);
  }
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplate-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncomplateList = (text) => {
  // li > pタグ生成 取得したテキストを入れる
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerText = text;

  // button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.className = "btnCmp";
  completeButton.innerText = "完了";

  // button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.className = "btnDlt";
  deleteButton.innerText = "削除";

  // button(戻す)生成
  const backButton = document.createElement("button");
  backButton.className = "btnBk";
  backButton.innerText = "戻す";

  // 戻すボタン押して、完了リスト→未完了リストに戻す
  backButton.addEventListener("click", () => {
    //押された戻すボタンの親タグ(li)を完了リストから削除
    const deleteTarget = backButton.parentNode;
    document.getElementById("complate-list").removeChild(deleteTarget);

    //テキスト取得
    const text = backButton.parentNode.firstElementChild.innerText;
    createIncomplateList(text);
  });

  // 完了ボタン押したときの挙動
  completeButton.addEventListener("click", () => {
    //　完了ボタンの親タグ（li）を、未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // 未完了リストのli以下を初期化
    addTarget.textContent = null;

    // pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    //完了リストに表示するliタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complate-list").appendChild(addTarget);
  });

  // 削除ボタン押したときの挙動
  deleteButton.addEventListener("click", () => {
    //削除ボタンの親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // 未完了リストにliタグと内容を追加
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  document.getElementById("incomplate-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
