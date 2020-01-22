/*
    title: static-pagination.js
    description: Pagination for static pages based on bootstrap and jquery (eg. jekyll)
    author: Incio
    github: https://github.com/inci-o
    site: https://inci-o/github.io
    email: inciojs@gmail.com
    version: 0.1.0
 */

let _currentPage, $category_list;

function pagination(perPage, page, category_list) {
    let $list = $('#static-pagination-list');
    let $pagination = $('#static-pagination');
    if (category_list !== null) {
        $category_list = category_list;
    }
    const _paginationLength = parseInt($category_list.length / perPage) + 1;
    if (page === 0 && _currentPage !== 1) {
        // 이전
        pagination(5, _currentPage - 1, null);
    } else if (page === _paginationLength + 1 && _currentPage !== _paginationLength + 1) {
        // 다음
        pagination(5, _currentPage + 1, null);
    } else {
        // 일반 선택
        _currentPage = page;
        $list.empty();
        for (let i = _currentPage * perPage - perPage; i < _currentPage * perPage; i++) {
            try {
                // list 내용 수정 확인
                $list.append('' +
                    '<li>' +
                    '<div><a href=' + $category_list[i].url + '>' + $category_list[i].title + '</a></div>' +
                    '<div>' + $category_list[i].content + '</div>' +
                    '<div><small>' + $category_list[i].date + '</small></div></li>');
            } catch (exception) {
                break;
            }
        }
    }

    if (_paginationLength > 1) {
        $pagination.empty();
        if (_currentPage === 1) {
            $pagination.append('<li class="page-item disabled">' +
                '<a class="page-link" href="#" onclick="pagination(' + perPage + ', ' + 0 + ', ' + null + ');">' +
                '<i class="material-icons" style="font-size: 14px;"><</i>' +
                '</a>' +
                '</li>');
        } else {
            $pagination.append('<li class="page-item">' +
                '<a class="page-link" href="#" onclick="pagination(' + perPage + ', ' + 0 + ', ' + null + ');">' +
                '<i class="material-icons" style="font-size: 14px;"><</i>' +
                '</a>' +
                '</li>');
        }

        for (let _page = 1; _page <= _paginationLength; _page++) {
            if (_page === _currentPage) {
                $pagination.append('<li class="page-item">' +
                    '<a class="page-link active" href="#" onclick="pagination(' + perPage + ', ' + _page + ', ' + null + ');">' + _page + '</a>' +
                    '</li>');
            } else {
                $pagination.append('<li class="page-item">' +
                    '<a class="page-link" href="#" onclick="pagination(' + perPage + ', ' + _page + ', ' + null + ');">' + _page + '</a>' +
                    '</li>');
            }
        }

        if (_currentPage === _paginationLength) {
            $pagination.append('<li class="page-item disabled">' +
                '<a class="page-link" href="#" onclick="pagination(' + perPage + ', ' + (_paginationLength + 1) + ', ' + null + ');">' +
                '<i class="material-icons" style="font-size: 14px;">></i>' +
                '</a>' +
                '</li>');
        } else {
            $pagination.append('<li class="page-item">' +
                '<a class="page-link" href="#" onclick="pagination(' + perPage + ', ' + (_paginationLength + 1) + ', ' + null + ');">' +
                '<i class="material-icons" style="font-size: 14px;">></i>' +
                '</a>' +
                '</li>');
        }
    }
}
