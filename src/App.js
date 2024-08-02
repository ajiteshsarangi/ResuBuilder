import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";
import Tooltip from "react-simple-tooltip";
function App() {
  const [sections, setSections] = useState([
    {
      id: "i1",
      itemName: "Profile Summary",
      userInput: "Profile Summary",
      info: "This field shows the summary of your profile",
      inputVisible: false,
      hasChanged: false,
      isInputClicked: false,
      isTooltipVisible: false,
      isClicked: false,
    },
    {
      id: "i2",
      itemName: "Academic and Cocurricular Achievements",
      userInput: "Academic and Cocurricular Achievements",
      info: "This field shows your Academic and Cocurricular Achievements",
      inputVisible: false,
      hasChanged: false,
      isInputClicked: false,
      isTooltipVisible: false,
      isClicked: false,
    },
    {
      id: "i3",
      itemName: "Summer Internship Experience",
      userInput: "Summer Internship Experience",
      info: "This field shows your Summer Internship Experience",
      inputVisible: false,
      hasChanged: false,
      isInputClicked: false,
      isTooltipVisible: false,
      isClicked: false,
    },
    {
      id: "i4",
      itemName: "Work Experience",
      userInput: "Work Experience",
      info: "This field shows your Work Experience",
      inputVisible: false,
      hasChanged: false,
      isInputClicked: false,
      isTooltipVisible: false,
      isClicked: false,
    },
    {
      id: "i5",
      itemName: "Projects",
      userInput: "Projects",
      info: "This field shows the projects you have done",
      inputVisible: false,
      hasChanged: false,
      isInputClicked: false,
      isTooltipVisible: false,
      isClicked: false,
    },
    {
      id: "i6",
      itemName: "Certifications",
      userInput: "Certifications",
      info: "This field shows the Certifications you have acquired",
      inputVisible: false,
      hasChanged: false,
      isInputClicked: false,
      isTooltipVisible: false,
      isClicked: false,
    },
    {
      id: "i7",
      itemName: "Leadership Positions",
      userInput: "Leadership Positions",
      info: "This field shows your Leadership Positions",
      inputVisible: false,
      hasChanged: false,
      isInputClicked: false,
      isTooltipVisible: false,
      isClicked: false,
    },
    {
      id: "i8",
      itemName: "Extracurricular",
      userInput: "Extracurricular",
      info: "This field shows your Extracurricular activities",
      inputVisible: false,
      hasChanged: false,
      isInputClicked: false,
      isTooltipVisible: false,
      isClicked: false,
    },
    {
      id: "i9",
      itemName: "Education",
      userInput: "Education",
      info: "This field gives a brief description of your education",
      inputVisible: false,
      hasChanged: false,
      isInputClicked: false,
      isTooltipVisible: false,
      isClicked: false,
    },
  ]);

  const handleInputChange = (e, index) => {
    const updatedSections = [...sections];
    updatedSections[index].userInput = e.target.value;
    updatedSections[index].hasChanged = e.target.value !== updatedSections[index].itemName;
    setSections(updatedSections);
  };

  const handleSaveClick = (index) => {
    const updatedSections = [...sections];
    updatedSections[index].itemName = updatedSections[index].userInput;
    updatedSections[index].inputVisible = false;
    updatedSections[index].hasChanged = false;
    updatedSections.forEach((section) => {
      section.isClicked = false;
    });
    setSections(updatedSections);
  };

  const handleIconClick = (index) => {
    const updatedSections = [...sections];
    updatedSections[index].inputVisible = true;
    updatedSections[index].hasChanged = false;
    setSections(updatedSections);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const updatedSections = Array.from(sections);
    const [reorderedItem] = updatedSections.splice(result.source.index, 1);
    updatedSections.splice(result.destination.index, 0, reorderedItem);

    setSections(updatedSections);
  };

  const [buttonStates, setButtonStates] = useState(Array(10).fill(false));

  const handleClick = (index) => {
    setButtonStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const handleToggleTooltip = (index) => {
    setSections((prevSections) => {
      const updatedSections = [...prevSections];
      updatedSections[index] = {
        ...updatedSections[index],
        isTooltipVisible: !updatedSections[index].isTooltipVisible,
      };
      console.log(updatedSections[0].isTooltipVisible);
      return updatedSections;
    });
  };

  const handleIconClick2 = (index) => {
    const updatedSections = sections.map((section, i) => {
      if (i !== index) {
        return {
          ...section,
          isClicked: true,
        };
      } else {
        return {
          ...section,
          isClicked: false,
        };
      }
    });
    setSections(updatedSections);
  };

  return (
    <div>
      <div className="text-center text-[2rem] m-8">Select your sections</div>
      <div className="flex flex-col items-center justify-start">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {sections.map((section, index) => {
                  return (
                    <Draggable key={section.id} draggableId={section.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="h-[75px]">
                            <div className="m-auto w-[1000px] flex flex-row items-center justify-center gap-[1rem] text-center">
                              <div
                                className={`w-[1000px] self-stretch flex flex-row items-center justify-between ${
                                  section.isClicked ? "item-color" : ""
                                }`}
                              >
                                <div className="flex items-center justify-start gap-[1rem]">
                                  <img className="w-[1.5rem] h-[1.5rem]" alt="" src="/icon.svg" />

                                  <div class="relative mx-2">
                                    {section.isTooltipVisible && (
                                      <div className="absolute left-[20px] w-[250px] bg-black text-white text-xs rounded py-1 px-4 bottom-full">
                                        {section.info}
                                      </div>
                                    )}

                                    <img
                                      style={{ cursor: "pointer" }}
                                      onClick={() => handleToggleTooltip(index)}
                                      className="w-[1.5rem] h-[1.5rem]"
                                      alt=""
                                      src="/info.svg"
                                    />
                                  </div>

                                  {section.inputVisible ? (
                                    <input
                                      className={`w-[250px] border border-lime-800 border-solid font-medium ${
                                        section.isInputClicked ? "border-red-500" : ""
                                      }`}
                                      type="text"
                                      value={section.userInput}
                                      onChange={(e) => handleInputChange(e, index)}
                                      onClick={() => {
                                        const updatedSections = [...sections];
                                        updatedSections[index].isInputClicked = true;
                                        setSections(updatedSections);
                                      }}
                                    />
                                  ) : (
                                    <div className="font-medium">{section.itemName}</div>
                                  )}
                                </div>
                                <div className="flex items-center justify-start gap-[1rem]">
                                  {section.inputVisible ? (
                                    <div>
                                      {section.hasChanged ? (
                                        <div
                                          className="text-black cursor-pointer h-[35px] flex items-center"
                                          onClick={() => handleSaveClick(index)}
                                        >
                                          Save
                                        </div>
                                      ) : (
                                        <img
                                          className="w-[35px] h-[35px] cursor-pointer"
                                          alt=""
                                          src="/icon1.svg"
                                          onClick={() => handleIconClick(index)}
                                        />
                                      )}
                                    </div>
                                  ) : (
                                    <img
                                      className="w-[35px] h-[35px] cursor-pointer"
                                      alt=""
                                      src="/icon1.svg"
                                      onClick={() => {
                                        handleIconClick(index);
                                        handleIconClick2(index);
                                      }}
                                    />
                                  )}
                                  <div className="w-[39px] h-6">
                                    <div className="flex items-center justify-center w-full mb-12">
                                      <label
                                        htmlFor={`toggle-${index}`}
                                        className="flex items-center cursor-pointer"
                                      >
                                        <div className="relative">
                                          <input
                                            type="checkbox"
                                            id={`toggle-${index}`}
                                            className="sr-only"
                                            onClick={() => handleClick(index)}
                                          />

                                          <div className="block w-10 h-[1.5rem] rounded-full transition-colors bg-gray-700 dark:bg-gray-500 dark:bg-opacity-20"></div>

                                          <div className="flex items-center dot absolute left-1 top-1 w-4 h-4 rounded-full transition-colors bg-blue-950 dark:bg-gray-500">
                                            {buttonStates[index] ? (
                                              <i
                                                class="uil uil-check"
                                                style={{ color: "white" }}
                                              ></i>
                                            ) : (
                                              <i
                                                class="uil uil-times"
                                                style={{ marginTop: "-3px", color: "white" }}
                                              ></i>
                                            )}
                                          </div>
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="w-[1000px] h-px border-t-[1px] border-solid m-[1.2rem]" />
                          </div>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <button class="w-[30%] justify-center m-[20px] h-[2.5rem] inline-flex items-center px-4 py-2 bg-[#8A4893] hover:bg-[#9650a0] text-white text-sm font-medium rounded-md">
          Save and Next
        </button>
      </div>
    </div>
  );
}

export default App;
