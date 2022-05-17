function createTodoList() {
    const todoListObject = {
        items: [
            {
                text: "Завершить текущий челлендж",
                completed: false
            },
            {
                text: "Отдохнуть во время перерыва",
                completed: false
            },
            {
                text: "Помочь напарнику понять код",
                completed: false
            },
            {
                text: "Выиграть в мафию",
                completed: true
            },
        ],
        printAll() {
            for (let i = 0; i < this.items.length; i++) {

                if (this.items[i].completed == true) {
                    console.log(`[x] ${this.items[i].text}`)
                } else {
                    console.log(`[ ] ${this.items[i].text}`)
                }

            }

        },
        add(newDela) {
            this.items = [{ text: newDela, completed: false }, ...this.items]
            console.log(this.printAll())
        },
        remove(number) {
            this.items.splice(number, 1)
        },
        print(num) {
            if (this.items[num].completed == true) {
                console.log(`[x] ${this.items[num].text}`)
            } else {
                console.log(`[ ] ${this.items[num].text}`)
            }

        },
        complete(i) {

            return this.items[i].completed = true
        },


    }
    return todoListObject;
}

const todoList = createTodoList();