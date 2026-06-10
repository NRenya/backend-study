try {
    const userobject = JSON.parse('{"name":"なかれん","age":29,"job":"バックエンド学習中"');
  } catch (error) {
    console.log("JSONの読み込みに失敗しました。");
  }

//try&catchはtryの中身で処理を行い、その処理が正確に行われた場合出力は正常にされるが何かとしらその時にエラーが出た場合、エラーがわかるように通知する機能。